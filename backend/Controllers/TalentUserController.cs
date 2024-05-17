using System.ComponentModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Models.DTOs;
using Services.Interface;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace Controllers
{

    [Route("api/talent/user")]
    [ApiController]
    // [Authorize(Roles = $"{Role.RoleNames.Talent}")] - add later
    [Produces("application/json")]
    public class TalentUserController : ControllerBase
    {
        // Declare services
        private readonly ITalentUserService _talentUserService;

        public TalentUserController(ITalentUserService talentUserService)
        {
            _talentUserService = talentUserService;
        }

        // Get user info
        [HttpGet("{userId}")]
        public IActionResult GetUserProfile([FromRoute] string userId)
        {

            try
            {
                var talentUser = _talentUserService.GetUserByIdAsync(userId);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e);
            }

            return Ok("Working"); //can this be extended
        }

        // Edit user info ...
        // Edit name, edit bio, edit location, edit contact number, edit email
    }
}