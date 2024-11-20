import deborah from '../assets/images/deborah 2.png';

const Donation = () => {
    return (
        // Container to center the component horizontally and vertically
        <div className="w-full flex items-center justify-center py-8 px-8">
            <div className="bg-gray-900 text-white rounded-lg flex flex-col md:flex-row items-center p-4 max-w-5xl w-full">
                {/* Text Section */}
                <div className="flex-grow text-center mb-4 md:mb-0">
                    <p className="text-lg">
                        "A portion of the profit is donated to an Indonesian orphanage."
                    </p>
                </div>
                {/* Image Section */}
                <div className="md:ml-4">
                    <img
                        src={deborah}
                        alt="A nun and a child standing together, smiling"
                        className="rounded-lg w-48 h-48 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Donation;
