import mongoose, {connect, Connection} from "mongoose";
import Main from "../Main";

export default class MongoManager {

    private mongo?: Connection;

    public async connect() {
        try {
            // if(!process.env.MONGO_URI){
            //     Main.log().warn("No MongoDB URI provided, skipping connection to MongoDB");
            //     return;
            // }
            mongoose.set("strictQuery", true);
            this.mongo = (await connect("mongodb://root:YpxCZI2mAaa7rq1sSY7iL8FVUSUIcX3IUB1r6JKqorWvDhoYrt@185.229.202.36:27017/?authSource=admin")).connection
            // if(!process.env.MONGO_DATABASE){
            //     Main.log().warn("No MongoDB database provided, skipping database selection");
            //     return;
            // }
            this.mongo?.useDb("ndi")
            Main.log().info("Successfully connected to MongoDB !");
        } catch (error) {
            throw new Error("Cannot connect to MongoDB: " + error);
        }
    }

    public getMongo() {
        return this.mongo;
    }

}