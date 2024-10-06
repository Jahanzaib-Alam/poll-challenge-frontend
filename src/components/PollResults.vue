<template>
    <div class="result-cards-container">
        <button v-for="option in options" :key="option.id" class="result-card-button"
            :style="{ background: `linear-gradient(to right, #a06cfc ${option.percentageOfTotal}%, rgba(255, 255, 255, 0.2) ${option.percentageOfTotal}%)` }">
            <span class="option-text">{{ option.optionText }}</span>
            <span class="percentage-text">{{ option.percentageOfTotal }}%</span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.result-cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 0px;
    position: relative;
}

.result-card-button {
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid #ffffff;
    color: white;
    padding: 10px 20px;
    font-size: 1.2em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    width: 30%;
    height: 3em;
    display: flex;
    /* Use flexbox for layout */
    align-items: center;
    /* Center items vertically */
    justify-content: space-between;
}

.result-card-button:hover {
    cursor: default;
}

.option-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.percentage-text {
    margin-left: auto;
}

/* Enlarge results on mobile/tablets so they are not squashed*/
@media (max-width: 1024px) {
    .result-card-button {
        width:90%;
    }
}
</style>
