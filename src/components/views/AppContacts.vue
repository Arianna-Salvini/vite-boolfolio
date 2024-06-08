<template>

    <div class="container pg">
        <h1 class="text-center pt-5 text_neon">
            < Contact me />
        </h1>
        <div class="d-flex justify-content-center align-items-center">
            <form action="post" class="d-flex flex-column justify-content-center align-items-center gap-4">
                <div class="d-flex ">
                    <div class="d-flex flex-column flex-grow-1">
                        <label for="name" class="pe-3 ">Insert here your fullname </label>
                        <input type="text" name="name" id="name" placeholder="Mario Rossi">
                    </div>
                </div>
                <div class="d-flex flex-column flex-grow-1">
                    <label for=" email" class="pe-3">Your email adress </label>
                    <input type="email" name="email" id="email" class="flex-grow-1">
                </div>

                <div class="d-flex flex-column">
                    <label for="content">Write here you request</label>
                    <textarea name="content" id="content" cols="100" rows="10"></textarea>
                </div>
            </form>
        </div>

        <p class="text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam accusantium
            quia quasi iure alias ullam sequi sit veritatis inventore unde neque necessitatibus adipisci illum in ipsum
            asperiores eaque dignissimos laboriosam, at placeat natus doloremque! Facilis amet eaque magni officiis,
            officia ad sint accusantium voluptatem, doloribus qui adipisci totam culpa.</p>
    </div>
</template>

<style>
.pg {
    height: 100%;
}
</style>