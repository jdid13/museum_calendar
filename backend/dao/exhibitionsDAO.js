import mongodb from "mongodb"
// const ObjectId = mongodb.ObjectId

let exhibitions

export default class ExhibitionsDAO {
    static async injectDB(conn) {
        if (exhibitions) {
            return
        }
        try {
            exhibitions = await conn.db(process.env.RESTMUSEUMS).collection("exhibitions")
        }
        catch (e) {
            console.error(
              `Unable to establish a collection handle in restaurantsDAO: ${e}`  
            )
        }
    }

    static async getExhibitions({
        // filters = null,
        exhibitionsPerPage = 20,
        page = 0
    } = {}) {

        let query
        // if (filters) {
        //     if ("name" in filters) {
        //         query = { $text: {$search: filters["name"] } }
        //     } else if ("cuisine" in filters) {
        //         query = { "cuisine": {$eq: filters["cuisine"] } }
        //     } else if ("zipcode" in filters) {
        //         query = { "address.zipcode": {$eq: filters["zipcode"] } }
        //     }
        // }

        let cursor
        try {
            cursor = await exhibitions.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { exhibitionsList: [], totalNumExhibitions: 0 }
        }

        const displayCursor = cursor.limit(exhibitionsPerPage).skip(exhibitionsPerPage * page)

        try {
            const exhibitionsList = await displayCursor.toArray()
            const totalNumExhibitions = await exhibitions.countDocuments(query)

            return { exhibitionsList, totalNumExhibitions }
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
            return { exhibitionsList: [], totalNumExhibitions: 0}
        }
    }
}