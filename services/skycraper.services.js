const skycraperModel = require("./../models/skycrapers");

class SkycraperService {

  async findAll() {
    return await skycraperModel.find();
  }

  async findById(id) {
    return await skycraperModel.findById(id);
  }

  async createSkycraper(skycraper) {
    return await new skycraperModel(skycraper).save();
  }

  async updateSkycraper(skycraper, id) {
    return await skycraperModel.findOneAndUpdate({ _id: id }, skycraper);
  }

  async deleteSkycraper(id) {
    await skycraperModel.findByIdAndDelete(id);
  }
}

module.exports = SkycraperService;
