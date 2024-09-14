import styles from './Download.module.css'
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"] }); 

interface Props {
    title: string
}

const DownloadButton = ({title}: Props) => {


    const handleDownload = () => {
        const pdfUrl = "/brendbook.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "brendbook.pdf"; // specify the filename
        document.body.appendChild(link); 
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <button className={`${styles.btn} ${nunito.className}`} onClick={handleDownload}>{title}</button>
        </>
    );
};

export default DownloadButton