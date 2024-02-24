function submitForm() {
    var nama = document.getElementById("nama").value;
    var tanggal_lahir = document.getElementById("tanggal_lahir").value;
    var jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var pesan = document.getElementById("pesan").value;

    var tanggal_submit = new Date().toLocaleString();

    console.log("Tanggal Submit:", tanggal_submit);
    console.log("Nama:", nama);
    console.log("Tanggal Lahir:", tanggal_lahir);
    console.log("Jenis Kelamin:", jenis_kelamin);
    console.log("Pesan:", pesan);

    // Menampilkan data di dalam elemen HTML
    document.getElementById("data-pengguna").innerHTML =  "<b>Current time: </b>" + tanggal_submit + "</b>" + "<br>" + "<br>" +
                                                          "<b>Nama: </b> " + nama + "</b>" + "<br>" +
                                                          "<b>Tanggal Lahir: </b> " + tanggal_lahir + "</b>" + "<br>" +
                                                          "<b>Jenis Kelamin: </b>" + jenis_kelamin + "</b>" + "<br>" +
                                                          "<b>Pesan: </b>" + pesan + "</b>";
}
