import * as mongoose from "mongoose";

const modelName = "User";

export interface UserDocument extends mongoose.Document {
  tenant: string;
  name: string;
}
// Model is from mongoose.Model
interface UserModel extends mongoose.Model<UserDocument> {
  
}

const Schema = new mongoose.Schema(
  {
    tenant: String,
    name: { type: String, text: true },
  },
  {
    timestamps: true
  }
);

const Model = mongoose.model<UserDocument, UserModel>(modelName, Schema);

export default Model;
