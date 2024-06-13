using backend.DataAccess;
using Microsoft.EntityFrameworkCore;
using backend.Repositories.Interface;
using backend.Repositories.Repository;
using backend.Services.Interface;
using backend.Services.Service;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddTransient<ITalentUserService, TalentUserService>();
            services.AddTransient<ITalentUserRepository, TalentUserRepository>();
            services.AddTransient<ITalentBusinessService, TalentBusinessService>();
            services.AddTransient<ITalentBusinessRepository, TalentBusinessRepository>();

            // If you're using Entity Framework Core, add your DbContext here
            // services.AddDbContext<ApplicationDbContext>(options =>
            //     options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<BeautyDbContext>(options =>
                options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            services.AddCors(options =>
            {
            options.AddPolicy("AllowReactApp",
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Serve static files from the React app
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseCors("AllowReactApp");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            // For React Router to work properly, fallback to index.html
            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 && !context.Request.Path.Value!.StartsWith("/api"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            //app.UseStaticFiles(); // Serve static files (like HTML, JS, CSS) after checking for API routes
        }
    }
}

