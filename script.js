document.addEventListener('DOMContentLoaded', function() {
    // Generate the periodic table
    generatePeriodicTable();
    
    // Set up print button functionality
    setupPrintButton();
});

// Function to generate the periodic table
function generatePeriodicTable() {
    const periodicTable = document.getElementById('periodicTable');
    
    // Clear any existing content
    periodicTable.innerHTML = '';
    
    // Create a grid with empty cells
    const grid = [];
    for (let period = 1; period <= 10; period++) {
        grid[period] = [];
        for (let group = 1; group <= 18; group++) {
            grid[period][group] = null;
        }
    }
    
    // Place elements in the grid
    elements.forEach(element => {
        if (element.group && element.period) {
            // Skip lanthanides and actinides from main table
            if ((element.number >= 57 && element.number <= 71) || 
                (element.number >= 89 && element.number <= 103)) {
                return;
            }
            grid[element.period][element.group] = element;
        }
    });
    
    // Special handling for lanthanides and actinides
    const lanthanides = elements.filter(e => e.type === 'lanthanide');
    const actinides = elements.filter(e => e.type === 'actinide');
    
    // Create the HTML structure for main table
    for (let period = 1; period <= 7; period++) {
        for (let group = 1; group <= 18; group++) {
            const element = grid[period][group];
            
            // Skip creating empty cells in specific areas
            if (
                (period === 1 && group > 2 && group < 18) ||
                (period === 2 && group > 2 && group < 13) ||
                (period === 3 && group > 2 && group < 13)
            ) {
                continue; // Skip these empty cells completely
            }
            
            // Create element cell
            const elementCell = document.createElement('div');
            
            if (element) {
                elementCell.className = `element ${element.type}`;
                elementCell.innerHTML = `
                    <div class="element-number">${element.number}</div>
                    <div class="element-symbol">${element.symbol}</div>
                    <div class="element-name">${element.name}</div>
                    <div class="element-mass">${element.mass}</div>
                `;
                
                // Set grid position
                elementCell.style.gridRow = period;
                elementCell.style.gridColumn = group;
                
                periodicTable.appendChild(elementCell);
            } else if ((period === 6 && group === 3)) {
                // Placeholder for lanthanides
                elementCell.className = 'element lanthanide';
                elementCell.innerHTML = `
                    <div class="element-number">57-71</div>
                    <div class="element-symbol">La-Lu</div>
                `;
                
                elementCell.style.gridRow = period;
                elementCell.style.gridColumn = group;
                
                periodicTable.appendChild(elementCell);
            } else if ((period === 7 && group === 3)) {
                // Placeholder for actinides
                elementCell.className = 'element actinide';
                elementCell.innerHTML = `
                    <div class="element-number">89-103</div>
                    <div class="element-symbol">Ac-Lr</div>
                `;
                
                elementCell.style.gridRow = period;
                elementCell.style.gridColumn = group;
                
                periodicTable.appendChild(elementCell);
            } else {
                // Only create necessary empty cells for proper spacing
                elementCell.className = 'element empty';
                elementCell.style.gridRow = period;
                elementCell.style.gridColumn = group;
                elementCell.style.visibility = 'hidden'; // Hide empty cells but keep their space
                
                periodicTable.appendChild(elementCell);
            }
        }
    }
    
    // Add a gap row
    const gapRow = document.createElement('div');
    gapRow.className = 'element empty';
    gapRow.style.gridRow = 8;
    gapRow.style.gridColumn = '1 / span 18';
    gapRow.style.height = '20px';
    periodicTable.appendChild(gapRow);
    
    // Add lanthanides row (period 9, groups 3-17)
    for (let i = 0; i < lanthanides.length; i++) {
        const element = lanthanides[i];
        const elementCell = document.createElement('div');
        
        elementCell.className = `element ${element.type}`;
        elementCell.innerHTML = `
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
            <div class="element-mass">${element.mass}</div>
        `;
        
        elementCell.style.gridRow = 9;
        elementCell.style.gridColumn = i + 3;
        
        periodicTable.appendChild(elementCell);
    }
    
    // Add actinides row (period 10, groups 3-17)
    for (let i = 0; i < actinides.length; i++) {
        const element = actinides[i];
        const elementCell = document.createElement('div');
        
        elementCell.className = `element ${element.type}`;
        elementCell.innerHTML = `
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
            <div class="element-mass">${element.mass}</div>
        `;
        
        elementCell.style.gridRow = 10;
        elementCell.style.gridColumn = i + 3;
        
        periodicTable.appendChild(elementCell);
    }
}

// Function to set up print button functionality
function setupPrintButton() {
    const printButton = document.getElementById('printButton');
    const printModal = document.getElementById('printOptions');
    const closeButton = document.querySelector('.close');
    const confirmPrintButton = document.getElementById('confirmPrint');
    
    // Show print options modal when print button is clicked
    printButton.addEventListener('click', function() {
        printModal.style.display = 'block';
    });
    
    // Close modal when close button is clicked
    closeButton.addEventListener('click', function() {
        printModal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === printModal) {
            printModal.style.display = 'none';
        }
    });
    
    // Handle print confirmation
    confirmPrintButton.addEventListener('click', function() {
        const paperSize = document.getElementById('paperSize').value;
        const orientation = document.getElementById('orientation').value;
        
        // Set print styles based on selected options
        const style = document.createElement('style');
        style.id = 'print-style';
        
        // Different scaling and positioning for different paper sizes
        let scale = '0.75';
        if (paperSize === 'A3' && orientation === 'landscape') {
            scale = '1.5';
        } else if (paperSize === 'A3' && orientation === 'portrait') {
            scale = '0.8';
        } else if (paperSize === 'A4' && orientation === 'landscape') {
            scale = '0.65';
        } else if (paperSize === 'A4' && orientation === 'portrait') {
            scale = '0.5';
        }
        
        style.innerHTML = `
            @page {
                size: ${paperSize} ${orientation};
                margin: 0;
            }
            
            @media print {
                .periodic-table {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(${scale});
                    display: grid !important;
                    grid-template-columns: repeat(18, 1fr) !important;
                    grid-gap: 3px !important;
                    max-width: 100%;
                    width: 100%;
                    overflow: visible !important;
                    page-break-inside: avoid !important;
                    page-break-after: avoid !important;
                    page-break-before: avoid !important;
                }
                
                html, body {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    min-height: 100vh;
                    overflow: visible !important;
                    position: relative;
                    page-break-inside: avoid !important;
                    page-break-after: avoid !important;
                    page-break-before: avoid !important;
                }
                
                .element {
                    background-color: #121212 !important;
                    color: white !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    position: relative !important;
                    page-break-inside: avoid !important;
                }
                
                .element.empty {
                    background-color: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                    display: none !important;
                }
                
                /* Preserve element type colors and borders */
                .alkali-metal, .alkaline-earth, .transition-metal, 
                .post-transition-metal, .metalloid, .nonmetal, 
                .halogen, .noble-gas, .lanthanide, .actinide {
                    border-width: 2px !important;
                    box-shadow: 0 0 8px currentColor !important;
                }
                
                .element-symbol {
                    text-shadow: 0 0 3px currentColor !important;
                }
            }
        `;
        
        // Remove any existing print styles
        const existingStyle = document.getElementById('print-style');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        // Add the new print style
        document.head.appendChild(style);
        
        // Close the modal
        printModal.style.display = 'none';
        
        // Trigger print dialog with a slight delay to ensure styles are applied
        setTimeout(function() {
            window.print();
        }, 300);
    });
} 