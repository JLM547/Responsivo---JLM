// Activar dropdowns con hover en desktop
$(document).ready(function () {
    if (window.innerWidth > 992) {
      $('.navbar .dropdown').hover(
        function () {
          $(this).find('.dropdown-menu').stop(true, true).slideDown(300);
        },
        function () {
          $(this).find('.dropdown-menu').stop(true, true).slideUp(300);
        }
      );
    }
  });  
  

// ========== Animaciones en el Hero ==========
$(document).ready(function () {
    $('.hero-title').hide().fadeIn(2000);
    $('.hero-subtitle').hide().slideDown(2000);
  });
  
  // Animación al cargar las tarjetas
$(document).ready(function () {
    $('.clase-card').hide().each(function (index) {
      $(this).delay(200 * index).fadeIn(600);
    });
  
    // Efecto hover opcional (extra al CSS)
    $('.clase-card').hover(
      function () {
        $(this).stop().animate({ marginTop: '-10px' }, 200);
      },
      function () {
        $(this).stop().animate({ marginTop: '0px' }, 200);
      }
    );
  });


  // ========== Contador animado ==========
$(document).ready(function () {
  let activado = false;

  $(window).on("scroll", function () {
    const seccionTop = $("#estadisticas").offset().top - window.innerHeight + 100;
    if (!activado && $(window).scrollTop() > seccionTop) {
      $(".numero").each(function () {
        const $this = $(this);
        const objetivo = parseInt($this.attr("data-contar"), 10);
        let contador = 0;

        const intervalo = setInterval(function () {
          contador += Math.ceil(objetivo / 100);
          if (contador >= objetivo) {
            contador = objetivo;
            clearInterval(intervalo);
          }
          $this.text(contador);
        }, 20);
      });
      activado = true;
    }
  });
});

// ========== Carrusel de Testimonios ==========
$(document).ready(function () {
  $('#carouselTestimonios').carousel({
    interval: 5000, // tiempo entre slides
    pause: 'hover'  // pausa al pasar el mouse
  });
});


// ========== Validación de formulario con Bootstrap + Spinner ==========
$(document).ready(function () {
  $('#formContacto').on('submit', function (e) {
    e.preventDefault();
    const form = this;
    if (!form.checkValidity()) {
      e.stopPropagation();
      $(form).addClass('was-validated');
    } else {
      $('#btnEnviar').prop('disabled', true);
      $('#spinner').removeClass('d-none');

      // Simula envío
      setTimeout(() => {
        alert("¡Mensaje enviado correctamente!");
        $('#spinner').addClass('d-none');
        $('#btnEnviar').prop('disabled', false);
        form.reset();
        $(form).removeClass('was-validated');
      }, 1500);
    }
  });
});

// ========== Filtrado de clases por categoría ==========//
$(document).ready(function () {
  $('.filtro-btn').click(function () {
    const categoria = $(this).attr('data-filtro');

    $('.filtro-btn').removeClass('btn-acento').addClass('btn-outline-light');
    $(this).removeClass('btn-outline-light').addClass('btn-acento');

    if (categoria === 'todos') {
      $('.clase-card').fadeIn();
    } else {
      $('.clase-card').hide();
      $('.' + categoria).fadeIn();
    }
  });
});

$(document).ready(function() {
  $('.rating .star').on('click', function() {
    const $star = $(this);
    const value = $star.data('value');
    const $rating = $star.closest('.rating');

    $rating.find('.star').removeClass('active');
    $star.addClass('active');
    $star.nextAll('.star').addClass('active'); // Activa todas las de la derecha

    // Si quieres guardar o enviar este rating:
    const entrenador = $rating.data('entrenador');
    console.log(`Entrenador ${entrenador} recibió una calificación de ${value}`);
  });
});



 //========== jQuery Validación + Spinner + Modal ==========//
  $(document).ready(function () {
    const form = $("#contactForm");

    // Validación en tiempo real
    form.on("input", "input, textarea", function () {
      const input = $(this);
      if (this.checkValidity()) {
        input.removeClass("is-invalid").addClass("is-valid");
      } else {
        input.removeClass("is-valid").addClass("is-invalid");
      }
    });

    // Envío del formulario
    form.on("submit", function (e) {
      e.preventDefault();

      if (this.checkValidity()) {
        $("#spinner").fadeIn();

        setTimeout(() => {
          $("#spinner").fadeOut();
          $("#confirmModal").modal("show");
          form[0].reset();
          form.find(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
        }, 1500);
      } else {
        form.find("input, textarea").each(function () {
          if (!this.checkValidity()) {
            $(this).addClass("is-invalid");
          }
        });
      }
    });
  });

  // ========== Precios Mensual/Anual ========== //
  $(document).ready(function () {
    // Tooltips Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

    // Toggle precios mensual/anual
    $('#togglePrecios').on('change', function () {
      const esAnual = $(this).is(':checked');
      $('.precio').each(function () {
        const precio = esAnual ? $(this).data('anual') : $(this).data('mensual');
        $(this).text(`$${precio}`);
      });
    });

    // Resaltar fila/columna con jQuery (opcional si querés más resaltado)
    $('table.table-hover tbody tr').hover(
      function () { $(this).addClass('table-active'); },
      function () { $(this).removeClass('table-active'); }
    );
  });


  $(document).ready(function () {
    $(".filtro").on("click", function () {
      const tag = $(this).data("tag");

      if (tag === "todos") {
        $(".articulo").fadeIn();
      } else {
        $(".articulo").each(function () {
          const articleTag = $(this).data("tag");
          if (articleTag === tag) {
            $(this).fadeIn();
          } else {
            $(this).fadeOut();
          }
        });
      }
    });
  });
  