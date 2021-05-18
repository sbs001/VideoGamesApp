const { v4: uuidv4 } = require('uuid');

class ModelCRUD {
    constructor(model) {
        this.model = model;
    }
    getAll = async (req, res, next) => {
        try {
            const result = await this.model.findAll();
            return res.json(result);
        }
        catch (error) { next(error) }
    };

    getByID = async (req, res, next) => {
        try {
            const result = await this.model.findByPk(req.params.id);
            return res.json(result);
        }
        catch (error) { next(error) }
    };

    add = async (req, res, next) => {
        try {
            const body = { ...req.body, id: uuidv4() };

            const result = await this.model.create(body);
            return res.json(result);
        }
        catch (error) { next(error) }
    };
}


module.exports = ModelCRUD;