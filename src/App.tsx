export const App2 = () => {

    const onClickButton = () =>{
        alert();
    };

    const contentStyle = {
        color : "blue",
        fontSize:"18px"
    };


    /**{}はJavascript構文を書くよって合図 */
    return (
      <>
        <h1 style={contentStyle}>こんにちは</h1>
        <p style={contentStyle}>あああああ</p>
        <button  onClick={onClickButton}>ボタン</button>
      </>
    );
  };