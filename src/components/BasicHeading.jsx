import PropTypes from 'prop-types';

const BasicHeading = ({ title, heading, desc }) => {
    return (
        <div className="text-center">
            <p className="tracking-[5px] inline-block px-4 py-[1px] rounded-full bg-[#FFEEE9] text-xs text-primary">{title}</p>
            <h1 className="mt-4 text-3xl font-bold">{heading}</h1>
            <p className="mt-5 mx-auto max-w-[600px] lg:w-[600px]">{desc}</p>
        </div>
    );
};

BasicHeading.propTypes = {
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default BasicHeading;
