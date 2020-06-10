<template>
<div>
<h2>about</h2>
<router-link :to="{name:`aboutall`}">now</router-link>
<router-link :to="{name:`aboutus`,redirect:`/aboutyou`}">aboutus</router-link>
<router-link :to="{name:`aboutyou`}">aboutyou</router-link>
<router-link :to="{name:`aboutboth`}">aboutboth</router-link>
<router-view name="default"></router-view>
<router-view name="others"></router-view>
</div>
</template>
