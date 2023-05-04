import { query } from "express";
import ExhibitionsDAO from "../dao/exhibitionsDAO.js";

export default class ExhibitionsController {
    static async apiGetExhibitions(req, res, next) {
        const exhibitionsPerPage = req.query.exhibitionsPerPage ? parseInt(req.query.exhibitionsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        // let filters = {}
        // if (req.query.cuisine) {
        //     filters.cuisine = req.query.cuisine
        // } else if (req.query.zipcode) {
        //     filters.zipcode = req.query.zipcode
        // } else if (req.query.name) {
        //     filters.name = req.query.name
        // }

        const { exhibitionsList, totalNumExhibitions } = await ExhibitionsDAO.getExhibitions({
            // filters,
            page,
            exhibitionsPerPage
        })

        let response = {
            exhibitions: exhibitionsList,
            page: page,
            // filters: filters,
            entries_per_page: exhibitionsPerPage,
            total_results: totalNumExhibitions
        }
        res.json(response)
    }
}