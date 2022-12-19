import React from "react";
import html2canvas from "html2canvas";
import MyNFT from "../my-nft/MyNFT";
import NFTImage from "./NFTImage";
const ShareNFT = () => {
  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element, { useCORS: true }),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "My-Dynamic-NFT.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <button type="button" onClick={handleDownloadImage}>
        Download
      </button>{" "}
      <div id="print">
        <NFTImage />
      </div>
    </div>
  );
};

export default ShareNFT;
