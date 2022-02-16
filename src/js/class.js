import makeMarcup from "../templates/marcup.hbs";
import { button, input } from "../index";
export const output = document.querySelector(".insert-container");

export default class Marcup {
  constructor() {
    this.page = 1;
    this.basicUrl = "https://newsapi.org/v2";
    this.option = {
      headers: {
        Authorization: "7196b2e5aeac48a7bdec6de806129b50",
      },
    };
  }

  makeRequest(themeForSearch) {
    button.disabled = true;
    const { basicUrl, page, option } = this;
    return fetch(
      `${basicUrl}/everything?q=${themeForSearch}&pageSize=8&page=${page}`,
      option
    )
      .then((res) => res.json())
      .then((res) => res.articles);
  }

  createMarcup(arr) {
    output.insertAdjacentHTML("beforeend", makeMarcup(arr));
    button.textContent = "Завантажити ще";
    button.disabled = false;
  }

  writeDownMarcup() {
    this.makeRequest(this.readInput()).then(this.createMarcup);
    this.page += 1;
  }

  readInput() {
    input.value.trim();
  }

  clearContainer() {
    output.innerHTML = "";
    button.textContent = "Знайти новини";
    this.page = 1;
  }
}
