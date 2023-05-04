import express from "express"
import MuseumsCtrl from "./museums.controller.js"
import ExhibitionsCtrl from "./exhibitions.controller.js"

const router = express.Router()

router.route("/").get(ExhibitionsCtrl.apiGetExhibitions)
router.route("/museums").get(MuseumsCtrl.apiGetMuseums)

export default router