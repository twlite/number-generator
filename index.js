function generate() {
    const data = {
        start: $("#from").val(),
        to: $("#to").val(),
        base: $("#base").val()
    };

    if (parseInt(data.start) > parseInt(data.to)) {
        alert("Starting number may not be greater than ending number!");
        location.reload();
        return;
    }
    const nums = [];
    const allowed = [2, 8, 10, 16];
    if (!allowed.includes(parseInt(data.base))) {
        alert("Invalid base!");
        location.reload();
        return;
    }

    for (let i = data.start; i <= data.to; i++) {
        nums.push(parseInt(i).toString(parseInt(data.base)));
    } 

    let up = `<div class="table-responsive">
        <table class="table table-bordered table-dark table-stripped table-hover">
            <thead>
                <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Numbers</th>
                </tr>
            </thead>
            <tbody>
            `
    let down = `
            </tbody>
        <table>
    </div>
    `;
    nums.forEach((n, i) => {
        up += `<tr>
            <th scope="row">${i+1}.</th>
            <td>${n.toUpperCase()}</td>
        </tr>`
    })
    $(".req").html(up + down);
}

document.getElementById("bton").addEventListener("click", (event) => {
    event.preventDefault();
});
