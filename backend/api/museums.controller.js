import { query } from "express";
import MuseumsDAO from "../dao/museumsDAO.js";

export default class MuseumsController {
    static async apiGetMuseums(req, res, next) {
        const museumsPerPage = req.query.museumsPerPage ? parseInt(req.query.museumsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        // let filters = {}
        // if (req.query.cuisine) {
        //     filters.cuisine = req.query.cuisine
        // } else if (req.query.zipcode) {
        //     filters.zipcode = req.query.zipcode
        // } else if (req.query.name) {
        //     filters.name = req.query.name
        // }

        const { museumsList, totalNumMuseums } = await MuseumsDAO.getMuseums({
            // filters,
            page,
            museumsPerPage
        })

        let response = {
            museums: museumsList,
            page: page,
            // filters: filters,
            entries_per_page: museumsPerPage,
            total_results: totalNumMuseums
        }
        res.json(response)
    }
}