<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="container">
        <form class="">
            <div class="form-group mb-4">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Name">
            </div>
            <div class="form-group mb-4">
                <label for="name">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Enter email">
            </div>
            <div class="form-group mb-4">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
</template>

<style lang="scss" scoped></style>
