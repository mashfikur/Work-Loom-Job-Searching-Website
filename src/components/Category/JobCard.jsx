import PropTypes from "prop-types";

const JobCard = ({ job }) => {
  const {
    _id,
    user_id,
    posted_by,
    posted_date,
    applied,
    title,
    company,
    category,
    banner,
    salary,
    deadline,
    description,
  } = job;
  return (
    <div>
      <div className="card h-[35rem]  bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[18rem] object-cover"
            src={banner}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};

export default JobCard;
