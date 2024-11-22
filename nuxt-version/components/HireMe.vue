<template>
    <div class="hireMe">
        <button @click="hireMe">{{ $t("message.hire") }}</button>
    </div>
</template>

<script setup>
const hireMe = () => {
    window.location.href = "mailto:annaboiko1@icloud.com";
};
</script>
<style>
.hireMe {
    position: fixed;
    /* Закріплює кнопку в певному положенні на екрані */
    bottom: 20px;
    /* Відступ від нижнього краю екрану */
    right: 20px;
    /* Відступ від правого краю екрану */
    background-color: #007bff;
    /* Колір фону кнопки */
    color: white;
    /* Колір тексту кнопки */
    border: none;
    /* Без рамки */
    padding: 10px 20px;
    /* Внутрішні відступи */
    border-radius: 5px;
    /* Закруглені кути */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* Тінь для ефекту */
    cursor: pointer;
    /* Іконка "руки" при наведенні */
    z-index: 1000;
    /* Високий індекс для відображення поверх інших елементів */
}
</style>
