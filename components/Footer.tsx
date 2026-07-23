export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0e2f3a] py-6 text-center text-sm text-white/70">
      <p>
        © {new Date().getFullYear()} Digitup · Todos los derechos reservados
      </p>
      <p className="mt-1">
        Desarrollado por{" "}
        <span className="font-medium text-[#4da3b3]">Digitup</span>
      </p>
    </footer>
  );
}
