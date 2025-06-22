const Message = require("../helper/utils");
const Home = require("../Module/Home");


class HomeController extends Home {

    async createbanner(req, res) {
        if (req.file.filename) {
            req.body.icon = req.file.filename;
        }
        await Home.create(req.body).then(results => {
            if (results) {
                res.status(200).send(Message.SUCCESS.CREATED)
            } else {
                res.status(500).send(Message.ERROR.BAD_REQUEST)
            }
        })
        res.status(500).send(Message.ERROR.VALIDATION_FAILED)
    }

    async ContactsRecords(req, res) {
        try {
            const result = await Home.findAll({
                attributes: [
                    "id", "assets", "extra_content", "heading", "icon",
                    "status", "sub_title", "title", "asset_json", "types"
                ],
                where: { status: "1" }
            });

            if (result) {
                res.status(200).send(
                    Message.RESPONSEDATA({ MESSAGE: "Home page records", RESULTS: result })
                );
            } else {
                res.status(404).send(
                    Message.ERROR.NOT_FOUND || { message: "No home page record found." }
                );
            }
        } catch (error) {
            console.error(error);
            res.status(500).send(Message.ERROR.INTERNAL_SERVER_ERROR || { message: "Something went wrong" });
        }
        res.status(500).send(Message.ERROR.BAD_REQUEST)
    }


}


module.exports = HomeController