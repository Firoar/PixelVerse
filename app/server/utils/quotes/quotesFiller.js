import { Quotes } from "../../models/Quotes.js";
import { printErrorInGoodWay } from "../printErrors.js";
import { AllQuotes } from "./quotes.js";

export const fillQuotesTable = async () => {
  const count = await Quotes.count();
  if (count === 0) {
    const mySet = new Set();
    const filteredQuotes = [];

    for (let arr of AllQuotes) {
      for (let quoteObj of arr) {
        if (quoteObj.q && !mySet.has(quoteObj.q)) {
          mySet.add(quoteObj.q);
          filteredQuotes.push(quoteObj);
        }
      }
    }

    console.log(`Unique quotes count: ${mySet.size}`);

    for (let quoteObj of filteredQuotes) {
      try {
        await Quotes.create({
          quote: quoteObj.q,
          author: quoteObj.a,
        });
      } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
          console.log(`Duplicate quote skipped: ${quoteObj.q}`);
        } else {
          console.error(`Error adding quote: ${quoteObj.q}`, error);
        }
      }
    }

    printErrorInGoodWay(
      "Successfully filled Quotes Table (skipped duplicates)"
    );
  }
};
