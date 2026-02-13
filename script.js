// このスクリプトは、TODOアプリケーションのための主要なJavaScriptコードです。

// グローバル変数の定義
let tasks = []; // タスクリストを保持する配列

// DOMが完全に読み込まれた後に実行される
document.addEventListener('DOMContentLoaded', () => {
    // タスクを表示するための初期化関数を呼び出す
    displayTasks();
});

// タスクリストを表示する関数
function displayTasks() {
    const taskList = document.getElementById('task-list'); // タスクリストを表示するHTML要素を取得
    taskList.innerHTML = ''; // 既存のタスクリストをクリア

    // 各タスクをタスクリストに追加
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li'); // 新しいリストアイテムを作成
        listItem.textContent = task; // タスクの内容をリストアイテムに設定
        // 各タスクに削除ボタンを追加
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除'; // ボタンに「削除」と設定
        deleteButton.addEventListener('click', () => {
            removeTask(index); // タスクを削除する関数を呼び出す
        });
        listItem.appendChild(deleteButton); // ボタンをリストアイテムに追加
        taskList.appendChild(listItem); // リストアイテムをタスクリストに追加
    });
}

// タスクを追加する関数
function addTask(task) {
    tasks.push(task); // 新しいタスクをタスクリストに追加
    displayTasks(); // 表示を更新
}

// 指定されたインデックスのタスクを削除する関数
function removeTask(index) {
    tasks.splice(index, 1); // 指定されたインデックスのタスクを削除
    displayTasks(); // 表示を更新
}

// 新しいタスクを追加するイベントリスナー
const addTaskButton = document.getElementById('add-task-button'); // ボタン要素を取得
addTaskButton.addEventListener('click', () => {
    const taskInput = document.getElementById('task-input'); // 入力要素を取得
    const task = taskInput.value.trim(); // 入力されたタスクの内容を取得
    if (task) { // タスクが空でない場合
        addTask(task); // タスクを追加
        taskInput.value = ''; // 入力フィールドをクリア
    }
});