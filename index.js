document.addEventListener('DOMContentLoaded', function() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            // Create and append elements for water sources
            const waterSourcesList = document.getElementById('water-sources-list');
            const waterSourcesElement = document.createElement('ul');
            data.waterSources.forEach(source => {
                const sourceElement = document.createElement('li');
                sourceElement.textContent = source;
                waterSourcesElement.appendChild(sourceElement);
            });
            waterSourcesList.appendChild(waterSourcesElement);

            // Create and append elements for usage data
            const usageData = document.getElementById('usage-data');
            const usageDataElement = document.createElement('ul');
            data.usageData.forEach(data => {
                const dataElement = document.createElement('li');
                dataElement.textContent = data;
                usageDataElement.appendChild(dataElement);
            });
            usageData.appendChild(usageDataElement);

            // Create and append elements for quality info
            const qualityInfo = document.getElementById('quality-info');
            const qualityInfoElement = document.createElement('ul');
            data.qualityInfo.forEach(info => {
                const infoElement = document.createElement('li');
                infoElement.textContent = info;
                qualityInfoElement.appendChild(infoElement);
            });
            qualityInfo.appendChild(qualityInfoElement);

            // Create and append elements for conservation tips
            const conservationTips = document.getElementById('conservation-tips');
            const conservationTipsElement = document.createElement('ul');
            data.conservationTips.forEach(tip => {
                const tipElement = document.createElement('li');
                tipElement.textContent = tip;
                conservationTipsElement.appendChild(tipElement);
            });
            conservationTips.appendChild(conservationTipsElement);
        })
        .catch(error => console.error('Error fetching data:', error));
});