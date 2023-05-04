import mongodb from "mongodb"
// const ObjectId = mongodb.ObjectId

let museums

export default class MuseumsDAO {
    static async injectDB(conn) {
        if (museums) {
            return
        }
        try {
            museums = await conn.db(process.env.RESTMUSEUMS).collection("museums")
        }
        catch (e) {
            console.error(
              `Unable to establish a collection handle in museumsDAO: ${e}`  
            )
        }
    }

    static async getMuseums({
        // filters = null,
        museumsPerPage = 20,
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
            cursor = await museums.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { museumsList: [], totalNumMuseums: 0 }
        }

        const displayCursor = cursor.limit(museumsPerPage).skip(museumsPerPage * page)

        try {
            const museumsList = await displayCursor.toArray()
            const totalNumMuseums = await museums.countDocuments(query)

            return { museumsList, totalNumMuseums }
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
            return { museumsList: [], totalNumMuseums: 0}
        }
    }
}