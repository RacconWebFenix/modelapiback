const express = require("express");
const SkycraperController = require("../controllers/skycrapers.controller");
const router = express.Router();

const skycraperController = new SkycraperController();

router.get("/", skycraperController.home);

// [GET] /skycrapers - Retorna a lista de skycrapers
router.get("/skycraper", skycraperController.getSkycraper);

// [GET] /skycrapers/{id} - Retorna apenas um Ãºnico skycraper pelo ID
router.get("/skycraper/:id", skycraperController.getSkycraperById);

// [POST] - /skycrapers - Cria um novo skycraper
router.post("/skycraper", skycraperController.createSkycraper);

// [PUT] - /skycrapers/{id} - Atualiza um skycraper pelo ID
router.put("/skycraper/:id", skycraperController.updateSkycraper);

// [Delete] - /skycrapers{id} - Remover um skycraper pelo ID
router.delete("/skycraper/:id", skycraperController.deleteSkycraper);

module.exports = router;
