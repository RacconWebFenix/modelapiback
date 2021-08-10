const SkycraperService = require("./../services/skycraper.services");
const mongoose = require("mongoose");

const skycraperService = new SkycraperService();

class SkycraperController {
  async home(req, res) {
    res.send("Bem vindo!");
  }

  async getSkycraper(req, res) {
    const skycrapers = await skycraperService.findAll();
    res.send(skycrapers);
  }

  async getSkycraperById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const skycraper = await skycraperService.findById(id);

    // Validação das mensagens
    if (!skycraper) {
      res.status(404).send("Skycraper não encontrado.");

      return;
    }

    res.send(skycraper);
  }

  async createSkycraper(req, res) {
    const skycraper = req.body;

    // Validação

    if (
      !skycraper ||
      !skycraper.nome ||
      !skycraper.altura ||
      !skycraper.localizacao ||
      !skycraper.desc ||
      !skycraper.imagemURL
    ) {
      res.status(400).send({
        message:
          "Skycraper inválido. Certifique-se de que o body da requisição possui os campos preenchidos corretamente.",
      });

      return;
    }

    const skycraperSalvo = await skycraperService.createSkycraper(skycraper);

    res.send(skycraperSalvo);
  }

  async updateSkycraper(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send("Código inválido.");
      return;
    }

    const skycraper = await skycraperService.findById(id);

    // Validação das mensagens
    if (!skycraper) {
      res.status(404).send("Skycraper não encontrado.");

      return;
    }

    const novoSkycraper = req.body;

    if (!Object.keys(novoSkycraper).length) {
      res.status(400).send({ message: "O body da requisição está vazio." });

      return;
    }

    if (
      !novoSkycraper ||
      !novoSkycraper.nome ||
      !novoSkycraper.altura ||
      !novoSkycraper.localizacao ||
      !novoSkycraper.desc ||
      !novoSkycraper.imagemURL
    ) {
      res.status(400).send({
        message:
          "Skycraper inválido. Certifique-se de que o body da requisição possui os campos preenchidos corretamente.",
      });

      return;
    }

    skycraperService.updateSkycraper(novoSkycraper, id);
    const skycraperAtualizado = await skycraperService.findById(id);

    res.send(skycraperAtualizado);
  }

  async deleteSkycraper(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const skycraper = await skycraperService.findById(id);

    // Validação das mensagens
    if (!skycraper) {
      res.status(404).send("Skycraper não encontrado.");

      return;
    }

    await skycraperService.deleteSkycraper(id);

    res.send({ message: "Skycraper excluído com sucesso" });
  }
}

module.exports = SkycraperController;
