## Composition
`.switch` - marks the flex to start as clomn and go to row on trigger point
    switch has to belong to some form of container. For example a block element.
```css
/* ------------------- */
/* Block               */
/* ------------------- */
.hero-flex {
    container-type: inline-size;
    container-name: hero-flex;
}


@container hero-flex (min-width: 990px) {
    .switch {
        flex-direction: row;
    }
}
```

## Utility
`.flex` - marks for display flex