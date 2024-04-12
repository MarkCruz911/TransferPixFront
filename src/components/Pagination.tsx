
const Pagination = () => {
    return (
        <nav aria-label="Page navigation" className="d-flex justify-content-center mt-40">
            <ul className="pagination justify-content-center align-items-center mb-40">
                <li className="page-item">
                    <a className="page-link previous" href="javascript:void(0)" aria-label="Previous">
                        <i className="fa-solid fa-angles-left"></i>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link previous" href="javascript:void(0)" aria-label="Previous">
                        <i className="fa-solid fa-angle-left"></i>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                <li className="page-item"><a className="page-link active" href="javascript:void(0)">2</a></li>
                <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                <li className="page-item"><a className="page-link" href="javascript:void(0)">...</a></li>
                <li className="page-item">
                    <a className="page-link next" href="javascript:void(0)" aria-label="Next">
                        <i className="fa-solid fa-angle-right"></i>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link next" href="javascript:void(0)" aria-label="Next">
                        <i className="fa-solid fa-angles-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;