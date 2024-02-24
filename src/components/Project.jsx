function Project({ image, title, description, deployedUrl, githubUrl, deployed }) {
    return (
        <div className="col">
            <div className="card shadow p-3 mb-5 bg-secondary-subtle">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={image} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body text-center">
                    <h5 className="justify-content-center">{title}</h5>
                    <p className="card-text text-body-emphasis">{description}</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-primary btn-outline-secondary"><a href={deployedUrl}>{deployed}</a></button>
                            <button type="button" className="btn btn-sm btn-info btn-outline-secondary"><a href={githubUrl}>GitHub</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;