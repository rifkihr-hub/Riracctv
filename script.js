function kirimWA(e) {
  e.preventDefault();
  
  const nama = document.getElementById('nama').value;
  const alamat = document.getElementById('alamat').value;
  const telp = document.getElementById('telp').value;
  const pesan = document.getElementById('pesan').value;
  
  const nomorWA = '6281234567890'; // GANTI DENGAN NOMOR LU
  
  const text = `Halo RIRA CCTV%0ANama: ${nama}%0AAlamat: ${alamat}%0ATelp: ${telp}%0AKebutuhan: ${pesan}`;
  
  window.open(`https://wa.me/${nomorWA}?text=${text}`, '_blank');
}