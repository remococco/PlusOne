$("span[jsname='pq']").each(function() {
    console.log(this.innerHTML);
    this.innerHTML--; 
    this.innerHTML += '.9';
});

