$("span[jsname='pq']").each(function() {
    console.log(this.innerHTML);
    this.innerHTML--; 
    this.innerHTML += '.';

    var span = document.createElement("span");
    span.innerHTML = '9';
    span.style.textDecoration = 'overline';
    this.appendChild(span);
});

