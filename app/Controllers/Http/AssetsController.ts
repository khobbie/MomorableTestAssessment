import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Asset from "App/Models/Asset";
import AssetRequestValidator from "App/Validators/AssetRequestValidator";
import Database from "@ioc:Adonis/Lucid/Database";

export default class AssetsController {
  // Create asset controller
  public async createAsset({ request }) {
    // validate asset request
    const new_asset = await request.validate(AssetRequestValidator);

    // Intance of Asset
    const asset = new Asset();

    // setting values of asset property
    asset.type = new_asset.type;
    asset.filename = new_asset.filename;
    asset.extension = new_asset.extension;
    asset.score_type_1 = new_asset.score_type_1;
    asset.score_type_2 = new_asset.score_type_2;
    asset.score_type_3 = new_asset.score_type_3;

    // Handling error using try & catch block
    try {
      // Saving asset in table and returning response
      await asset.save();
      return {
        hasErrors: false,
        message: "Asset created successfully",
        data: asset,
      };
    } catch (error) {
      // Error response
      return {
        hasErrors: true,
        message: "Error, Failed to create asset",
        data: null,
      };
    }
  }

  // Controller for Total score for asset give param asset id
  public async addAssets({ params }) {
    // get asset id and checking if exist
    const assetId = params.id;
    const asset = await Asset.find(assetId);

    // check if found
    if (asset == null) {
      // no found
      return {
        hasErrors: true,
        message: "No data found",
        data: null,
      };
    } else {
      // function to perform addition of the three scores
      const totalScore = await this.addAssetScores(
        asset.score_type_1,
        asset.score_type_2,
        asset.score_type_3
      );
      //return response
      return {
        hasErrors: false,
        message: "Data found",
        data: {
          assets: {
            score1: asset.score_type_1,
            score2: asset.score_type_2,
            score3: asset.score_type_3,
          },
          totalScore: totalScore,
        },
      };
    }
  }

  // Get asset by asset id
  public async getOneAsset({ params }) {
    // get asset id and checking if exist
    const assetId = params.id;
    const asset = await Asset.find(assetId);
    return {
      hasErrors: false,
      message: "Data Found",
      data: asset,
    };
  }

  // Get all assets
  public async getAssets() {
    const assets = await Asset.all();
    return {
      hasErrors: false,
      message: "Data Found",
      data: assets,
    };
  }

  // Function that receives three scores and perform addition
  private async addAssetScores(score1: number, score2: number, score3: number) {
    return score1 + score2 + score3;
  }

  // Controller for Average score given type and score type
  public async averageScore({ request }) {
    const type = request.qs().type;
    const scoreType = request.qs().scoreType;

    let scoreType_ = "score_type_1";

    switch (scoreType) {
      case "1":
        scoreType_ = "score_type_1";
        break;
      case "2":
        scoreType_ = "score_type_2";
        break;
      case "3":
        scoreType_ = "score_type_3";
        break;

      default:
        return {
          error: "ScoreType does not exist",
        };
        break;
    }

    // constructing my raw SQL
    const query =
      "SELECT AVG(" +
      scoreType_ +
      ") average_score FROM assets a WHERE type='" +
      type +
      "';";

    // execute query
    const average = await Database.rawQuery(query).exec();

    if (average == null) {
      return {
        hasErrors: false,
        message: "No data found",
        data: null,
      };
    } else {
      return {
        hasErrors: false,
        message: "Average " + scoreType_ + " for " + type,
        data: {
          average_score: average[0][0].average_score,
        },
      };
    }

    return average[0][0].average_score;
  }
}
