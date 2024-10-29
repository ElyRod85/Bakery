// Divider
function insertDivider() {
    const dividerHTML = `
        <div class="divider">
            <span class="separator">
                <div class="logo">
                    <img src="imgs/catita-cat-logo.webp" alt="Catita section divider">
                </div>
            </span>
        </div>
    `;

    const customTags = document.querySelectorAll('custom-divider');
    customTags.forEach(tag => {
        tag.innerHTML = dividerHTML;
    });
}

insertDivider();


// Pink divider shape (down)
function shapeDividerDown() {
    const shapeDividerDownHTML = `
        <div class="shapes">
            <img src="imgs/waves-divider.svg">
        </div>
    `;

    const customTags = document.querySelectorAll('shape-divider-down');
    customTags.forEach(tag => {
        tag.innerHTML = shapeDividerDownHTML;
    });
}

shapeDividerDown();


// Pink divider shape (up)
function shapeDividerUp() {
    const shapeDividerUpHTML = `
        <div class="shapes vert">
            <img src="imgs/waves-divider.svg">
        </div>
    `;

    const customTags = document.querySelectorAll('shape-divider-up');
    customTags.forEach(tag => {
        tag.innerHTML = shapeDividerUpHTML;
    });
}

shapeDividerUp();


// Green divider shape (down)
function shapeDividerGreenDown() {
    const shapeDividerGreenDownHTML = `
        <div class="shapes green">
            <img src="imgs/waves-divider.svg">
        </div>
    `;

    const customTags = document.querySelectorAll('shape-divider-green-down');
    customTags.forEach(tag => {
        tag.innerHTML = shapeDividerGreenDownHTML;
    });
}

shapeDividerGreenDown();


// Green divider shape (up)
function shapeDividerGreenUp() {
    const shapeDividerGreenUpHTML = `
        <div class="shapes green vert">
            <img src="imgs/waves-divider.svg">
        </div>
    `;

    const customTags = document.querySelectorAll('shape-divider-green-up');
    customTags.forEach(tag => {
        tag.innerHTML = shapeDividerGreenUpHTML;
    });
}

shapeDividerGreenUp();


// Footer divider shape (up)
function shapeDividerFooterUp() {
    const shapeDividerFooterUpHTML = `
        <div class="shapes footerdiv vert">
            <img src="imgs/waves-divider.svg">
        </div>
    `;

    const customTags = document.querySelectorAll('shape-divider-footer-up');
    customTags.forEach(tag => {
        tag.innerHTML = shapeDividerFooterUpHTML;
    });
}

shapeDividerFooterUp();

