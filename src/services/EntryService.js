import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

/* function to add new entry to firestore */
class EntryService {
  addEntry = async (e) => {
    console.log("Adding");
    try {
      await addDoc(collection(db, "entry"), {
        email: e.email,
        wallet: e.wallet,
        loc: [...e.loc],
        created: Timestamp.now(),
      });
      console.log("Successful");
    } catch (err) {
      console.log(err);
    }
  };
}
export default new EntryService();
