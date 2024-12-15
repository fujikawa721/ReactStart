export const App2 = () => {

    const onClickButton = () =>{
        alert();
    };

    const contentStyleA = {
        color : "blue",
        fontSize:"18px"
    };

    const contentStyleB = {
      color : "blue",
      fontSize:"18px"
  };


    /**{}はJavascript構文を書くよって合図 */
    return (
      <>
        <h1 style={contentStyleA}>こんにちは</h1>
        <p style={contentStyleA}>あああああ</p>
        <p style={contentStyleB}>元気です</p>
        <button  onClick={onClickButton}>ボタン</button>
      </>
    );
  };