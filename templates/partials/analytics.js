{% if GOOGLE_ANALYTICS %}
    <!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id={{ GOOGLE_ANALYTICS }}"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', '{{ GOOGLE_ANALYTICS }}');
	</script>
{% endif %}