export default class World {
  // このクラスで使うプロパティ
  message: string;

  // コンストラクタ（初期化）
  constructor(message: string) {
    this.message = message;
  }

  // 外部から呼び出せるメソッドを定義
  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      return (elem.innerText = this.message);
    } else {
      return;
    }
  }
}
