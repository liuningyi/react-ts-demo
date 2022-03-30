import React, { useEffect, useState } from 'react';

function MyBlob() {
    const obj = { hello: "world" };
    const myBlob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });

    // 创建blob数据的子集blob
    const childBlob = myBlob.slice(6, 14, "text/html");
    console.log(childBlob)
}

function myArrayBuffer() {
    const buffer = new ArrayBuffer(10);
    const view1 = new DataView(buffer);
    view1.setInt16(1, 5);
    view1.setUint8(1, 10);
}

function myFileReader(_file: any,callback:any) {
    const reader = new FileReader();
    reader.readAsDataURL(_file);
    reader.onload = () => {
        console.log(reader.result)
        callback(reader.result)
    }
}

const Home = () => {
    const [imgUrl, setImgUrl] = useState("");
    const [ifUrl, setIfUrl] = useState("");

    useEffect(() => {
        MyBlob();
        myArrayBuffer();
    }, []);

    const handleChange = (e: any) => {
        console.log(e.target.files)
        const url = URL.createObjectURL(e.target.files[0]);
        setIfUrl(url);
        myFileReader(e.target.files[0],(result:any)=>{
            setImgUrl(result)
        });
    }

    return (
        <>
            <input id="input" type="file" name="input" multiple onChange={handleChange} />
            <img src={imgUrl} alt="" style={{ width: '100px', height: '100px' }} />
            <span style={{ padding: '20px' }}></span>
            <iframe src={ifUrl} width={500} height={500}></iframe>
        </>
    )
}

export default Home