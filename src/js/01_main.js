const createButton = document.querySelector(".create-post__create-btn");
const postContainer = document.querySelector(".main-content");

const handleAddPost = () => {
    const text = document.querySelector(".create-post__input").value; // Move this inside the function
    postContainer.insertAdjacentHTML('beforeend', `
        <div class="post">
            <div class="post__img"></div>
            <div class="post__content">
                <div class="post__item">
                    <div class="post__item--head">
                        <div class="post__title">${text}</div>
                        <div class="post__categories">
                            <p class="post__category">new</p>
                        </div>
                    </div>
                    <div class="post__info">
                        <div class="post__author">
                            <div class="post__author--icon"></div>
                            <div class="post__author--info">
                                <p class="post__author--name">AR Jakir</p>
                                <p class="post__author--date">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

}

createButton.addEventListener("click", handleAddPost);
