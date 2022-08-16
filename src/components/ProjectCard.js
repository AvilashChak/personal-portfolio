import { Col } from 'react-bootstrap';

export const ProjectCard= ({ title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={4} className="mob_px_20">
            <div className="proj-imgbx">
                <img src={imgUrl} />
            </div>
            <div className="proj-txt">
                <div><a href={link} target="_blank"><h4>{title}</h4></a></div>
                <span>{description}</span>
                <a href={link} target="_blank"></a>
            </div>  
        </Col>
    )
}