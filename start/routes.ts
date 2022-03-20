/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import AssetsController from "App/Controllers/Http/AssetsController";

Route.get("/", async () => {
  return { hello: "world" };
});

// Get all asset
Route.get("assets", "AssetsController.getAssets");

// Create asset
Route.post("assets", "AssetsController.createAsset");

// Get asset by asset id
Route.get("assets/:id", "AssetsController.getOneAsset");

// Get total score of asset by asset id
Route.get("add-assets/:id", "AssetsController.addAssets");

// Get average score given asset type and score type
Route.get("assets-average-score", "AssetsController.averageScore");
