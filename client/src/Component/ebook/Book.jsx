import React, { useState } from "react";
import "./Book.css";

const Book = () => {
    const [ebooks] = useState([
        {
            name: "Basic Python Programming",
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCC5D1TGMT8U63HF2iM4VmzwkQ1FDUZE5tkpoVMpCzgpZkJ22Yszas7l1QkvQlVbnGI_M9EiL4VipsrAAGD8ezRFH_NkOSwhl8qQJMEc-c",
            link: "https://www.flipkart.com/basic-python-programming-beginners/p/itm304ddb1371887?pid=9789354720604&lid=LSTBOK9789354720604DYBRFU&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc",
        },
        {
            name: "Beginners Guide to Java Programming",
            image: "https://rukminim2.flixcart.com/image/312/312/kyag87k0/book/g/m/1/beginners-guide-to-java-programming-original-imagakfhnz6xfbzf.jpeg?q=70&crop=false",
            link: "https://www.flipkart.com/beginners-guide-java-programming/p/itm72329a5d08dc8?pid=9789391373849&lid=LSTBOK9789391373849YJEBSA&marketplace=FLIPKART&fm=productRecommendation%2Fattach&iid=R%3Aa%3Bp%3A9789354720604%3Bl%3ALSTBOK9789354720604DYBRFU%3Bpt%3App%3Buid%3Af5dcdacf-e15b-11ef-9329-9158185a0fdb%3B.9789391373849&ppt=None&ppn=None&ssid=vq25njk0dc0000001738497057093&otracker=pp_reco_Frequently%2BBought%2BTogether_2_Frequently%2BBought%2BTogether_9789391373849_productRecommendation%2Fattach_2&otracker1=pp_reco_PINNED_productRecommendation%2Fattach_Frequently%2BBought%2BTogether_NA_productCard_cc_2_NA_view-all&cid=9789391373849",
        },
        {
            name: "Web Development Guide",
            image: "https://rukminim2.flixcart.com/image/612/612/kmuxevk0/book/h/o/y/advanced-web-development-with-react-original-imagfzbedzwdrsjx.jpeg?q=70",
            link: "https://www.flipkart.com/advanced-web-development-react/p/itm632fe99afe977?pid=9789389423594&lid=LSTBOK9789389423594B1IYNH&marketplace=FLIPKART&q=web+development+book&store=bks&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&fm=productRecommendation%2Fattach&iid=0053bd96-fe0c-4ba3-b628-13813a062672.9789389423594.SEARCH&ppt=pp&ppn=pp&ssid=gj1xa95k4g0000001738497581009&qH=ec51cfa5176c05b8",
        },
        {
            name: "ReactJS for Jobseekers",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/book/g/e/d/reactjs-for-jobseekers-original-imaghr5vrnvczrxr.jpeg?q=70&crop=false",
            link: "https://www.flipkart.com/reactjs-for-jobseekers/p/itm7c20578391132?pid=9789355513434&lid=LSTBOK97893555134344S6NWX&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3A9789389423594%3Bl%3ALSTBOK9789389423594B1IYNH%3Bpt%3App%3Buid%3A677dcb23-e15d-11ef-902f-aba4050ebe65%3B.9789355513434&ppt=pp&ppn=pp&ssid=gj1xa95k4g0000001738497581009&otracker=pp_reco_Similar%2BProducts_4_34.productCard.PMU_HORIZONTAL_ReactJS%2Bfor%2BJobseekers_9789355513434_productRecommendation%2Fsimilar_3&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_4_NA_view-all&cid=9789355513434",
        },
        {
            name: "Ultimate Full-Stack Web Development with MERN",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/book/f/f/g/ultimate-full-stack-web-development-with-mern-design-build-test-original-imagvthnzpygzrcp.jpeg?q=70&crop=false",
            link: "https://www.flipkart.com/ultimate-full-stack-web-development-mern-design-build-test-deploy-production-grade-applications-mongodb-express-react-nodejs/p/itm8ea69f9939a12?pid=9788119416424&lid=LSTBOK97881194164246RKBDO&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3A9789355513434%3Bl%3ALSTBOK97893555134344S6NWX%3Bpt%3App%3Buid%3Aa9179dc1-e15d-11ef-a728-a9f41480c601%3B.9788119416424&ppt=pp&ppn=pp&ssid=gj1xa95k4g0000001738497581009&otracker=pp_reco_Similar%2BProducts_1_34.productCard.PMU_HORIZONTAL_Ultimate%2BFull-Stack%2BWeb%2BDevelopment%2Bwith%2BMERN%253A%2BDesign%252C%2BBuild%252C%2BTest%2Band%2BDeploy%2BProduction-Grade%2BWeb%2BApplications%2Bwith%2BMongoDB%252C%2BExpress%252C%2BReact%2Band%2BNodeJS_9788119416424_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=9788119416424",
        },
        {
            name: "ReactJS for Jobseekers",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/book/g/e/d/reactjs-for-jobseekers-original-imaghr5vrnvczrxr.jpeg?q=70&crop=false",
            link: "https://www.flipkart.com/reactjs-for-jobseekers/p/itm7c20578391132?pid=9789355513434&lid=LSTBOK97893555134344S6NWX&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3A9789389423594%3Bl%3ALSTBOK9789389423594B1IYNH%3Bpt%3App%3Buid%3A677dcb23-e15d-11ef-902f-aba4050ebe65%3B.9789355513434&ppt=pp&ppn=pp&ssid=gj1xa95k4g0000001738497581009&otracker=pp_reco_Similar%2BProducts_4_34.productCard.PMU_HORIZONTAL_ReactJS%2Bfor%2BJobseekers_9789355513434_productRecommendation%2Fsimilar_3&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_4_NA_view-all&cid=9789355513434",
        },
        {
            name: "ReactJS for Jobseekers",
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/book/g/e/d/reactjs-for-jobseekers-original-imaghr5vrnvczrxr.jpeg?q=70&crop=false",
            link: "https://www.flipkart.com/reactjs-for-jobseekers/p/itm7c20578391132?pid=9789355513434&lid=LSTBOK97893555134344S6NWX&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3A9789389423594%3Bl%3ALSTBOK9789389423594B1IYNH%3Bpt%3App%3Buid%3A677dcb23-e15d-11ef-902f-aba4050ebe65%3B.9789355513434&ppt=pp&ppn=pp&ssid=gj1xa95k4g0000001738497581009&otracker=pp_reco_Similar%2BProducts_4_34.productCard.PMU_HORIZONTAL_ReactJS%2Bfor%2BJobseekers_9789355513434_productRecommendation%2Fsimilar_3&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_4_NA_view-all&cid=9789355513434",
        },


    ]);


    return (
        <div className="ebook-container">
            <h1 className="ebook-title">E-Books Collection</h1>
            <div className="ebook-contain-card">
                {ebooks.map((book, index) => (
                    <div key={index} className="ebook-card">
                        <img src={book.image} alt={book.name} className="ebook-image" />
                        <h3 className="ebook-name">{book.name}</h3>
                        <a href={book.link} target="_blank" rel="noopener noreferrer" className="ebook-link">Order link</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Book;
