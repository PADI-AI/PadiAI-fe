import React, { useState } from 'react';
import './UploadDocument.css'; // Import CSS for styling
import PropTypes from 'prop-types';


const UploadDocument = ({
    uploadDocsTitle, uploadDocsName
}) => {

    const handleSubmitClick = () => {

    }

    const handleRemoveContent = () => {

    }

return (
    <div className="uploadDocumentSectionContainer">
        <div className="uploadDocumentSection">
            <div className="uploadDocument">
                <div className="uploadDocsTitle">
                    {uploadDocsTitle}
                </div>
                <button className="uploadDocsButton" onClick={handleSubmitClick} type="button">add submission</button>
            </div>
            <div>
                <div className="uploadDocumentContainer">
                    <div className="documentName">
                        {uploadDocsName}
                    </div>
                    <button className="removeButton" onClick={handleRemoveContent} type="button">
                        remove
                    </button>
                </div>
            </div>
        </div>
    </div>

);
};

UploadDocument.propTypes = {
    uploadDocsTitle: PropTypes.string.isRequired,
    uploadDocsName: PropTypes.string.isRequired,
};

export default UploadDocument;