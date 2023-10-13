import "./styles.css";

const onClickAdd = () => {
  //入力した文字を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createincompleteList(inputText);
};
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
//未完了リストに追加する関数
const createincompleteList = (text) => {
  //divタグ
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ１
  const li = document.createElement("li");
  li.innerText = text;

  //divタグの子要素

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンを押した行を完了したToDoのDOMに追加し、削除する。
    const addTarget = completeButton.parentNode;
    deleteFromIncompleteList(addTarget);
    //ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を取得
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createincompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //未完了リストから指定の要素を削除

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
