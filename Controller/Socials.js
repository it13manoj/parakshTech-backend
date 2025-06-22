const Message = require("../helper/utils");
const Social = require("../Module/Social");


class SocialController extends Social {

    async createbanner(req, res) {
        if (req.file.filename) {
            req.body.icon = req.file.filename;
        }
        await Social.create(req.body).then(results => {
            if (results) {
                res.status(200).send(Message.SUCCESS.CREATED)
            } else {
                res.status(500).send(Message.ERROR.BAD_REQUEST)
            }
        })
        res.status(500).send(Message.ERROR.VALIDATION_FAILED)
    }

    async SocialRecords(req, res) {
        try {
            const result = await Social.findAll({
                attributes: [
                    "id", "assets", "extra_content", "heading", "icon",
                    "status", "sub_title", "title", "asset_json", "types"
                ],
                where: { status: "1" }
            });

            if (result) {
                res.status(200).send(
                    Message.RESPONSEDATA({ MESSAGE: "Social page records", RESULTS: result })
                );
            } else {
                res.status(404).send(
                    Message.ERROR.NOT_FOUND || { message: "No Social page record found." }
                );
            }
        } catch (error) {
            console.error(error);
            res.status(500).send(Message.ERROR.INTERNAL_SERVER_ERROR || { message: "Something went wrong" });
        }
        res.status(500).send(Message.ERROR.BAD_REQUEST)
    }


}


module.exports = SocialController